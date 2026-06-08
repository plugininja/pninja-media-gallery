import type { StatusProps } from "./Status.type";
import InlineStack from "~/components/molecules/InlineStack";
import { BackgroundColor, TextColor } from "~/types/styles";
import Tooltip from "~/components/atoms/Tooltip";
import Card from "~/components/molecules/Card";
import Icon from "~/components/atoms/Icon";
import { __ } from "@wordpress/i18n";
import clsx from "clsx";

// Ninja Gallery is a free plugin — no pro-gating.
// Status renders children transparently unless an info badge flag is set.

const Status = ({
    id,
    style,
    className = "",
    isComingSoon = false,
    isHot = false,
    isNew = false,
    isBeta = false,
    placement = "default",
    top = 10,
    bottom,
    left,
    right = 10,
    tooltipPlacement = "left",
    size = "medium",
    widthFull = true,
    ignore = false,
    children,
}: StatusProps) => {
    // Transparent wrapper when no badge flags are active.
    if ( ignore || ( ! isComingSoon && ! isHot && ! isNew && ! isBeta ) ) {
        return <>{ children }</>;
    }

    type StatusConfig = { key: string; variant: string; title: string; icon: string; iconColor: TextColor; condition: boolean };

    const statusConfig: StatusConfig[] = [
        { key: "comingsoon", variant: "warning",    title: __( "Coming Soon",        "ninja-gallery" ), icon: "upcoming",              iconColor: "white",   condition: isComingSoon },
        { key: "hot",        variant: "error",      title: __( "Most Used Feature",  "ninja-gallery" ), icon: "local_fire_department", iconColor: "white",   condition: isHot },
        { key: "badge-new",  variant: "badge-new",  title: __( "New Feature",        "ninja-gallery" ), icon: "campaign",              iconColor: "primary", condition: isNew },
        { key: "beta",       variant: "secondary",  title: __( "Beta Feature",       "ninja-gallery" ), icon: "running_with_errors",   iconColor: "primary", condition: isBeta },
    ];

    const statusList = statusConfig.filter( ( s ) => s.condition );

    const parsePosition = ( value?: number | string ) =>
        value === undefined ? undefined : typeof value === "number" ? `${value}px` : value;

    let positionStyles: React.CSSProperties = {};
    switch ( placement ) {
        case "center":       positionStyles = { top: "50%", left: "50%",                    transform: "translate(-50%,-50%)" }; break;
        case "right-center": positionStyles = { top: "50%", right: parsePosition( right ?? 10 ), transform: "translateY(-50%)" }; break;
        case "left-center":  positionStyles = { top: "50%", left:  parsePosition( left  ?? 10 ), transform: "translateY(-50%)" }; break;
        case "top-center":   positionStyles = { top: parsePosition( top  ?? 10 ), left: "50%", transform: "translateX(-50%)" }; break;
        case "bottom-center":positionStyles = { bottom: parsePosition( bottom ?? 10 ), left: "50%", transform: "translateX(-50%)" }; break;
        default:             positionStyles = { top: parsePosition( top ), right: parsePosition( right ), bottom: parsePosition( bottom ), left: parsePosition( left ) };
    }

    return (
        <div id={ id } style={ style } className={ clsx( "pn-status", widthFull && "w-full", className ) }>
            <InlineStack
                wrap={ false }
                gap={ size === "extrasmall" ? 5 : size === "small" ? 7 : 9 }
                style={ positionStyles }
                className="pn-status__items"
            >
                { statusList.map( ( { key, variant, title, icon, iconColor } ) => (
                    <Tooltip key={ key } title={ title } placement={ tooltipPlacement } arrow wrap="no-wrap">
                        <Card
                            padding={ 5 }
                            rounded="sm"
                            borderStyle="none"
                            background={ variant as BackgroundColor }
                            className={ clsx( "pn-status__items-item", `pn-status__items-item--${ size }` ) }
                        >
                            <Icon name={ icon } color={ iconColor } />
                        </Card>
                    </Tooltip>
                ) ) }
            </InlineStack>
            <div className="pn-status__content">{ children }</div>
        </div>
    );
};

// No premium tier in Ninja Gallery — always returns null.
Status.Pro = ( { title: _t, color: _c }: { title?: string; color?: TextColor } ) => null;

export default Status;
