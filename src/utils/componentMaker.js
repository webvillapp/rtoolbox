import React from "react";

export function componentMaker(name, title) {
    const TagName = name;
    return <TagName title={title} />
}
