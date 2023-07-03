import React, { PropsWithChildren, useCallback, useState } from "react";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary, darken,
    lighten
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fieldBackgroundSubtleHover } from "../util/field_colors";

export function ExpandablePanel({
                                    title,
                                    children,
                                    invisible = false,
                                    initiallyExpanded = true,
                                    highlightOnHover = false,
                                    padding = 1,
                                    dark = true,
                                    onExpandedChange
                                }: PropsWithChildren<{
    title: React.ReactNode,
    invisible?: boolean,
    initiallyExpanded?: boolean;
    padding?: number | string;
    highlightOnHover?: boolean,
    dark?: boolean,
    onExpandedChange?: (expanded: boolean) => void
}>) {

    const [onHover, setOnHover] = React.useState(false);
    const setOnHoverTrue = useCallback(() => setOnHover(true), []);
    const setOnHoverFalse = useCallback(() => setOnHover(false), []);

    const [expandedInternal, setExpandedInternal] = useState(initiallyExpanded);
    return (
        <Accordion variant={"outlined"}
                   onMouseEnter={setOnHoverTrue}
                   onMouseMove={setOnHoverTrue}
                   onMouseLeave={setOnHoverFalse}
                   disableGutters
                   expanded={expandedInternal}
                   sx={theme => ({
                       backgroundColor: invisible ? "transparent" : (dark ? (
                           onHover && highlightOnHover
                               ? fieldBackgroundSubtleHover(theme)
                               : "transparent"
                       ) : "inherit"),

                       borderRadius: invisible ? 0 : `${theme.shape.borderRadius}px`,
                       border: invisible ? "none" : undefined,
                       "&::before": {
                           display: "none"
                       },
                       // color: "inherit"

                   })}
                   TransitionProps={{ unmountOnExit: true }}
                   onChange={useCallback((event: React.SyntheticEvent, expanded: boolean) => {
                       onExpandedChange?.(expanded);
                       setExpandedInternal(expanded);
                   }, [onExpandedChange])}>

            <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                              sx={(theme) => ({
                                  color: theme.palette.text.secondary,
                                  padding: invisible ? 0 : undefined,
                                  minHeight: "56px",
                                  alignItems: "center",
                                  borderTopLeftRadius: `${theme.shape.borderRadius}px`,
                                  borderTopRightRadius: `${theme.shape.borderRadius}px`,
                                  borderBottomLeftRadius: !expandedInternal && !invisible ? `${theme.shape.borderRadius}px` : undefined,
                                  borderBottomRightRadius: !expandedInternal && !invisible ? `${theme.shape.borderRadius}px` : undefined,
                                  border: invisible ? "none" : undefined,
                                  borderBottom: invisible ? `1px solid ${theme.palette.divider}` : undefined,
                                  "&.Mui-expanded": {
                                      borderBottom: `1px solid ${theme.palette.divider}`
                                  }
                              })}>
                {title}
            </AccordionSummary>

            <AccordionDetails sx={(theme) => ({
                padding: invisible ? 0 : typeof padding === "string" ? padding : theme.spacing(padding),
                py: theme.spacing(2),
                border: invisible ? "none" : undefined,
                color: "inherit"
            })}>
                {children}
            </AccordionDetails>

        </Accordion>
    )
}
