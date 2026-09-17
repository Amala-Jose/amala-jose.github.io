/**
 * Renders children flat on larger screens, exactly as before, and as a
 * native <details>/<summary> disclosure on narrow ones.
 *
 * This exists to cut down on scroll length on mobile for the two longest
 * sections (case studies, career timeline) without changing the desktop
 * reading experience at all.
 *
 * @param {string} summary        label shown as the collapsed row on mobile
 * @param {boolean} defaultOpen   whether this item starts open on mobile
 */

import { useIsMobile } from '../hooks/useIsMobile';
import "./Accordion.css";

export function Accordion({ summary, defaultOpen = false, children, className = ""}) {
    const isMobile = useIsMobile();

    if(!isMobile) {
        return <div className={className}>{children}</div>
    }

    return (
        <details className={`accordion ${className}`} open={defaultOpen}>
            <summary className="accordion__summary">
                <span className="accordion__icon" aria-hidden="true">
                    <span className="accordion__icon-h" />
                    <span className="accordion__icon-v" />
                </span>
            </summary>
            <div className="accordion__body">{ children }</div>
        </details>
    )
}