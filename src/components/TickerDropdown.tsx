import useTickers from "../hooks/useTickers.ts";
import {FC} from "react";
import {ItemRenderer, Select} from "@blueprintjs/select";
import {Button, MenuItem} from "@blueprintjs/core";

interface TickerDropdownProps{
    currentTicker:string|null;
    onChange:(ticker:string) => void;
}

const TickerDropdown:FC<TickerDropdownProps> = ({currentTicker, onChange}) => {
    const tickers = useTickers();

    const handleTickerSelection = (ticker:string) => {
        onChange(ticker);
    }

    const renderTicker:ItemRenderer<string> = (ticker, {handleClick, handleFocus, modifiers}) => {
        if(!modifiers.matchesPredicate){
            return null;
        }

        return(
            <MenuItem
                text={ticker}
                active={modifiers.active}
                disabled={modifiers.disabled}
                onClick={handleClick}
                onFocus={handleFocus}
                roleStructure="listoption"
                label={ticker}
            />
        )
    }

    return(
        <>
            {tickers.length > 0 ? (
                <Select
                    className="justify-self-start "
                    placeholder="Select company"
                    items={tickers}
                    itemRenderer={renderTicker}
                    onItemSelect={(e) => handleTickerSelection(e)}>
                    <Button
                        className="w-full"
                        icon="caret-down">
                        {currentTicker ? currentTicker : "Select company"}
                    </Button>
                </Select>
                ) : (
                <p>No tickers available</p>
            )}
        </>
    )
};

export default TickerDropdown;