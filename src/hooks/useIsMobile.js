/**
 * True while the viewport matches the given max-width query.
 *
 * Used to switch a couple of long sections to an accordion on small screens
 * only, without touching the desktop layout at all.
 */

import { useEffect, useState } from 'react';

export function useIsMobile(query = "(max-width: 40rem)") {
    const [ isMobile, setIsMobile ] = useState(() => typeof window !== "undefined" && window.matchMedia ? window.matchMedia(query).matches : false);
    useEffect(() => {
        if( typeof window === "undefined" || !window.matchMedia ) return;
        const mql = window.matchMedia(query);
        const onChange = (event) => setIsMobile(event.matches);

        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return isMobile;

}