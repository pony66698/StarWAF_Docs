import React from "react";
import { useLocation } from "@docusaurus/router";

import DocsVersionDropdownNavbarItem
    from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";

export default function DocsVersionDropdownNavbarItemWrapper(props) {
    const { pathname } = useLocation();
    if (!pathname.startsWith("/docs/")) {
        return null;
    }
    return (
        <>
            <DocsVersionDropdownNavbarItem {...props} />
        </>
    );
}
