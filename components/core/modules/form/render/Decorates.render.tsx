"use client";

import { IconProps } from "@vape/components/Icon";
import { Col, Gap, Span, resolveSpanClass } from "@vape/lib/resolveGrid";
import { UseFormReturn } from "react-hook-form";
import { FieldBuilder } from "../RenderFields";
import { ContainerDecorate } from "./fields/decorates/Container.decorate";
import { SectionsDecorate } from "./fields/decorates/Section.decorate";

export type DecorateBuilder = {
    label?: string;
    type: "container" | "sections";
    format?: (value: any) => string;
    fields?: FieldBuilder[];
    span?: Span;
    icon?: IconProps["name"];
    col?: Col;
    gap?: Gap;
    tabs?: {
        label: string;
        name: string;
        description?: string;
        disabled?: boolean;
        fields: FieldBuilder[];
    }[];
    noBorder?: boolean;
};

export const RenderDecorates = ({
    decorateBuilder,
    span,
    form,
}: {
    decorateBuilder: DecorateBuilder;
    span?: Span;
    form: UseFormReturn<any, any, undefined>;
}) => {
    return (
        <div className={`flex flex-col relative ${resolveSpanClass(span)}`}>
            {decorateBuilder.type === "container" && decorateBuilder.fields ? (
                <ContainerDecorate
                    fieldBuilders={decorateBuilder.fields}
                    form={form}
                    label={decorateBuilder.label}
                    col={decorateBuilder?.col}
                    gap={decorateBuilder?.gap}
                    noBorder={decorateBuilder?.noBorder}
                />
            ) : null}

            {decorateBuilder.type === "sections" && decorateBuilder.tabs ? (
                <SectionsDecorate
                    tabs={decorateBuilder.tabs}
                    form={form}
                    col={decorateBuilder?.col}
                    gap={decorateBuilder?.gap}
                />
            ) : null}
        </div>
    );
};