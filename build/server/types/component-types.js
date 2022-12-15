"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentTypes = {
    Badge: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "defaultColor" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "import",
                                importKind: "value",
                                name: "Color",
                                moduleSpecifier: "csstype",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "logo" },
                        value: { kind: "string" },
                        trailingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: Use Url type here",
                                raw: " TODO: Use Url type here",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "attendee" },
                        value: {
                            kind: "generic",
                            value: { kind: "class", name: { kind: "id", name: "Contact" } },
                        },
                        leadingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: Use Url type here",
                                raw: " TODO: Use Url type here",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "texture" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "height" },
                        value: {
                            kind: "generic",
                            typeParams: { kind: "typeParams", params: [{ kind: "string" }] },
                            key: { kind: "any" },
                            value: {
                                kind: "import",
                                importKind: "value",
                                name: "HeightProperty",
                                moduleSpecifier: "csstype",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "width" },
                        value: {
                            kind: "generic",
                            typeParams: { kind: "typeParams", params: [{ kind: "string" }] },
                            key: { kind: "any" },
                            value: {
                                kind: "import",
                                importKind: "value",
                                name: "WidthProperty",
                                moduleSpecifier: "csstype",
                            },
                        },
                    },
                ],
                trailingComments: [
                    {
                        type: "commentLine",
                        value: "TODO: Use Image type for logo, not url (string)",
                        raw: " TODO: Use Image type for logo, not url (string)",
                    },
                ],
                referenceIdName: "BadgeProps",
            },
            name: { kind: "id", name: "Badge", type: null },
        },
    },
    Card: { kind: "program" },
    Contacts: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "items" },
                        value: {
                            kind: "generic",
                            typeParams: {
                                kind: "typeParams",
                                params: [{ kind: "object", members: [] }],
                            },
                            key: { kind: "any" },
                            value: { kind: "id", name: "Array" },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "render" },
                        value: { kind: "any" },
                        trailingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: What's the correct type for this?",
                                raw: " TODO: What's the correct type for this?",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "renderProps" },
                        value: { kind: "object", members: [] },
                        leadingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: What's the correct type for this?",
                                raw: " TODO: What's the correct type for this?",
                            },
                        ],
                    },
                ],
                referenceIdName: "ContactsProps",
            },
            name: { kind: "id", name: "Contacts", type: null },
        },
    },
    GlobalStyles: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "fonts" },
                        value: {
                            kind: "generic",
                            value: { kind: "class", name: { kind: "id", name: "Fonts" } },
                        },
                    },
                ],
                referenceIdName: "GlobalStylesProps",
            },
            name: { kind: "id", name: "GlobalStyles", type: null },
        },
    },
    Interactive: {
        kind: "program",
        component: {
            kind: "any",
            name: { kind: "id", name: "createInteractive", type: null },
        },
    },
    Presentation: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "presentationID" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "slides" },
                        value: {
                            kind: "arrayType",
                            type: {
                                kind: "generic",
                                value: {
                                    kind: "variable",
                                    declarations: [
                                        {
                                            kind: "initial",
                                            id: { kind: "id", name: "Slide" },
                                            value: {
                                                kind: "templateExpression",
                                                tag: {
                                                    kind: "memberExpression",
                                                    object: {
                                                        kind: "import",
                                                        importKind: "value",
                                                        name: "styled",
                                                        moduleSpecifier: "@emotion/styled",
                                                        referenceIdName: "styled",
                                                    },
                                                    property: { kind: "id", name: "div" },
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "features" },
                        value: {
                            kind: "object",
                            members: [
                                {
                                    kind: "property",
                                    optional: false,
                                    key: { kind: "id", name: "showSlideNumber" },
                                    value: { kind: "boolean" },
                                },
                                {
                                    kind: "property",
                                    optional: false,
                                    key: { kind: "id", name: "showSlideProgress" },
                                    value: { kind: "boolean" },
                                },
                            ],
                        },
                    },
                ],
                referenceIdName: "PresentationProps",
            },
            name: { kind: "id", name: "Presentation", type: null },
        },
    },
    Schedule: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "intervals" },
                        value: {
                            kind: "generic",
                            typeParams: {
                                kind: "typeParams",
                                params: [
                                    {
                                        kind: "object",
                                        members: [
                                            {
                                                kind: "property",
                                                optional: false,
                                                key: { kind: "id", name: "begin" },
                                                value: {
                                                    kind: "generic",
                                                    value: { kind: "class", name: "Interval['begin']" },
                                                },
                                            },
                                            {
                                                kind: "property",
                                                optional: false,
                                                key: { kind: "id", name: "end" },
                                                value: {
                                                    kind: "generic",
                                                    value: { kind: "class", name: "Interval['end']" },
                                                },
                                            },
                                            {
                                                kind: "property",
                                                optional: false,
                                                key: { kind: "id", name: "sessions" },
                                                value: {
                                                    kind: "generic",
                                                    typeParams: {
                                                        kind: "typeParams",
                                                        params: [
                                                            {
                                                                kind: "object",
                                                                members: [
                                                                    {
                                                                        kind: "property",
                                                                        optional: false,
                                                                        key: { kind: "id", name: "title" },
                                                                        value: {
                                                                            kind: "generic",
                                                                            value: {
                                                                                kind: "class",
                                                                                name: "Session['title']",
                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        kind: "property",
                                                                        optional: false,
                                                                        key: { kind: "id", name: "type" },
                                                                        value: {
                                                                            kind: "generic",
                                                                            value: {
                                                                                kind: "class",
                                                                                name: "Session['type']",
                                                                            },
                                                                        },
                                                                        trailingComments: [
                                                                            {
                                                                                type: "commentLine",
                                                                                value: "TODO: How to resolve names of the people?",
                                                                                raw: " TODO: How to resolve names of the people?",
                                                                            },
                                                                            {
                                                                                type: "commentLine",
                                                                                value: 'people: Session["people"];',
                                                                                raw: ' people: Session["people"];',
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                    key: { kind: "any" },
                                                    value: { kind: "id", name: "Array" },
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            key: { kind: "any" },
                            value: { kind: "id", name: "Array" },
                        },
                    },
                ],
                referenceIdName: "ScheduleProps",
            },
            name: { kind: "id", name: "Schedule", type: null },
        },
    },
    Select: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: true,
                        key: { kind: "id", name: "width" },
                        value: {
                            kind: "generic",
                            typeParams: { kind: "typeParams", params: [{ kind: "string" }] },
                            key: { kind: "any" },
                            value: {
                                kind: "import",
                                importKind: "value",
                                name: "WidthProperty",
                                moduleSpecifier: "csstype",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "onChange" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "id",
                                name: "React.SelectHTMLAttributes['onChange']",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "options" },
                        value: {
                            kind: "generic",
                            typeParams: {
                                kind: "typeParams",
                                params: [
                                    {
                                        kind: "object",
                                        members: [
                                            {
                                                kind: "property",
                                                optional: false,
                                                key: { kind: "id", name: "value" },
                                                value: { kind: "any" },
                                            },
                                            {
                                                kind: "property",
                                                optional: false,
                                                key: { kind: "id", name: "label" },
                                                value: { kind: "any" },
                                            },
                                            {
                                                kind: "property",
                                                optional: true,
                                                key: { kind: "id", name: "selected" },
                                                value: { kind: "boolean" },
                                            },
                                        ],
                                    },
                                ],
                            },
                            key: { kind: "any" },
                            value: { kind: "id", name: "Array" },
                        },
                    },
                    {
                        kind: "property",
                        optional: true,
                        key: { kind: "id", name: "selected" },
                        value: { kind: "any" },
                        trailingComments: [
                            {
                                type: "commentLine",
                                value: "One of options",
                                raw: " One of options",
                            },
                        ],
                    },
                ],
                leadingComments: [
                    {
                        type: "commentLine",
                        value: "TODO: Add generics",
                        raw: " TODO: Add generics",
                    },
                    {
                        type: "commentLine",
                        value: "TODO: Drop selected from options?",
                        raw: " TODO: Drop selected from options?",
                    },
                ],
                referenceIdName: "SelectProps",
            },
            name: { kind: "id", name: "Select", type: null },
        },
    },
    EmbedContent: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "content" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "object",
                                members: [
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "title" },
                                        value: { kind: "string" },
                                    },
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "link" },
                                        value: { kind: "string" },
                                    },
                                ],
                                referenceIdName: "EmbedContent",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                ],
                referenceIdName: "EmbedContentProps",
            },
            name: { kind: "id", name: "EmbedContent", type: null },
        },
    },
    GridContent: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "background" },
                        value: {
                            kind: "generic",
                            value: { kind: "class", name: { kind: "id", name: "Image" } },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "content" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "object",
                                members: [
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "columns" },
                                        value: {
                                            kind: "tuple",
                                            types: [{ kind: "string" }, { kind: "string" }],
                                        },
                                        trailingComments: [
                                            {
                                                type: "commentLine",
                                                value: "TODO: Generalize",
                                                raw: " TODO: Generalize",
                                            },
                                        ],
                                    },
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "title" },
                                        value: { kind: "string" },
                                        leadingComments: [
                                            {
                                                type: "commentLine",
                                                value: "TODO: Generalize",
                                                raw: " TODO: Generalize",
                                            },
                                        ],
                                    },
                                ],
                                referenceIdName: "GridContent",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                ],
                referenceIdName: "GridContentProps",
            },
            name: { kind: "id", name: "GridContent", type: null },
        },
    },
    ImageContent: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "content" },
                        value: {
                            kind: "generic",
                            value: { kind: "class", name: { kind: "id", name: "Image" } },
                        },
                    },
                ],
                referenceIdName: "ImageContentProps",
            },
            name: { kind: "id", name: "ImageContent", type: null },
        },
    },
    MarkdownContent: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "background" },
                        value: {
                            kind: "generic",
                            value: { kind: "class", name: { kind: "id", name: "Image" } },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "content" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "object",
                                members: [
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "title" },
                                        value: { kind: "string" },
                                    },
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "markup" },
                                        value: { kind: "string" },
                                    },
                                ],
                                referenceIdName: "MarkdownContent",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                ],
                referenceIdName: "MarkdownContentProps",
            },
            name: { kind: "id", name: "MarkdownContent", type: null },
        },
    },
    SectionContent: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "content" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "object",
                                members: [
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "title" },
                                        value: { kind: "string" },
                                    },
                                ],
                                referenceIdName: "SectionContent",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                ],
                referenceIdName: "SectionContentProps",
            },
            name: { kind: "id", name: "SectionContent", type: null },
        },
    },
    TitleContent: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "content" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "object",
                                members: [
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "title" },
                                        value: {
                                            kind: "generic",
                                            value: { kind: "id", name: "JSX.Element" },
                                        },
                                    },
                                    {
                                        kind: "property",
                                        optional: false,
                                        key: { kind: "id", name: "subtitle" },
                                        value: { kind: "string" },
                                    },
                                ],
                                referenceIdName: "TitleContent",
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                ],
                referenceIdName: "TitleContentProps",
            },
            name: { kind: "id", name: "TitleContent", type: null },
        },
    },
    Slides: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "selectedSlide" },
                        value: { kind: "number" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "slides" },
                        value: {
                            kind: "arrayType",
                            type: {
                                kind: "generic",
                                value: {
                                    kind: "object",
                                    members: [
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "layout" },
                                            value: { kind: "string" },
                                        },
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "content" },
                                            value: {
                                                kind: "union",
                                                types: [
                                                    {
                                                        kind: "generic",
                                                        value: {
                                                            kind: "object",
                                                            members: [
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "title" },
                                                                    value: { kind: "string" },
                                                                },
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "link" },
                                                                    value: { kind: "string" },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "generic",
                                                        value: {
                                                            kind: "object",
                                                            members: [
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "columns" },
                                                                    value: {
                                                                        kind: "tuple",
                                                                        types: [
                                                                            { kind: "string" },
                                                                            { kind: "string" },
                                                                        ],
                                                                    },
                                                                    trailingComments: [
                                                                        {
                                                                            type: "commentLine",
                                                                            value: "TODO: Generalize",
                                                                            raw: " TODO: Generalize",
                                                                        },
                                                                    ],
                                                                },
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "title" },
                                                                    value: { kind: "string" },
                                                                    leadingComments: [
                                                                        {
                                                                            type: "commentLine",
                                                                            value: "TODO: Generalize",
                                                                            raw: " TODO: Generalize",
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "generic",
                                                        value: {
                                                            kind: "class",
                                                            name: { kind: "id", name: "Image" },
                                                        },
                                                    },
                                                    {
                                                        kind: "generic",
                                                        value: {
                                                            kind: "object",
                                                            members: [
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "title" },
                                                                    value: { kind: "string" },
                                                                },
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "markup" },
                                                                    value: { kind: "string" },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "generic",
                                                        value: {
                                                            kind: "object",
                                                            members: [
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "title" },
                                                                    value: {
                                                                        kind: "generic",
                                                                        value: { kind: "id", name: "JSX.Element" },
                                                                    },
                                                                },
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "subtitle" },
                                                                    value: { kind: "string" },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "generic",
                                                        value: {
                                                            kind: "object",
                                                            members: [
                                                                {
                                                                    kind: "property",
                                                                    optional: false,
                                                                    key: { kind: "id", name: "title" },
                                                                    value: { kind: "string" },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                    referenceIdName: "Slide",
                                },
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "presentationID" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "features" },
                        value: {
                            kind: "object",
                            members: [
                                {
                                    kind: "property",
                                    optional: false,
                                    key: { kind: "id", name: "showSlideNumber" },
                                    value: { kind: "boolean" },
                                },
                                {
                                    kind: "property",
                                    optional: false,
                                    key: { kind: "id", name: "showSlideProgress" },
                                    value: { kind: "boolean" },
                                },
                            ],
                        },
                    },
                ],
                referenceIdName: "SlidesProps",
            },
            name: { kind: "id", name: "Slides", type: null },
        },
    },
    Sponsor: { kind: "program" },
    Sponsors: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "sponsors" },
                        value: {
                            kind: "arrayType",
                            type: {
                                kind: "generic",
                                value: {
                                    kind: "object",
                                    members: [
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "name" },
                                            value: {
                                                kind: "generic",
                                                value: { kind: "class", name: "Contact['name']" },
                                            },
                                        },
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "about" },
                                            value: {
                                                kind: "generic",
                                                value: { kind: "class", name: "Contact['about']" },
                                            },
                                        },
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "image" },
                                            value: {
                                                kind: "generic",
                                                value: { kind: "class", name: "Contact['image']" },
                                            },
                                        },
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "type" },
                                            value: {
                                                kind: "generic",
                                                value: {
                                                    kind: "import",
                                                    importKind: "value",
                                                    name: "default",
                                                    moduleSpecifier: "./ContactType",
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    },
                ],
                trailingComments: [
                    {
                        type: "commentLine",
                        value: "TODO: Check if the structure can be simplified",
                        raw: " TODO: Check if the structure can be simplified",
                    },
                ],
                referenceIdName: "SponsorsProps",
            },
            name: { kind: "id", name: "Sponsors", type: null },
        },
    },
    VariableSelector: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "variables" },
                        value: {
                            kind: "object",
                            members: [
                                {
                                    kind: "property",
                                    key: { kind: "id", name: "[key: string]" },
                                    value: { kind: "any" },
                                },
                            ],
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "field" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "selectedVariable" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "query" },
                        value: { kind: "string" },
                        trailingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: Use the same type as in connect",
                                raw: " TODO: Use the same type as in connect",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "mapToCollection" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "function",
                                returnType: { kind: "any" },
                                parameters: [
                                    {
                                        kind: "param",
                                        value: { kind: "id", name: "result" },
                                        type: null,
                                    },
                                ],
                            },
                        },
                        leadingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: Use the same type as in connect",
                                raw: " TODO: Use the same type as in connect",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "mapToOption" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "function",
                                returnType: {
                                    kind: "object",
                                    members: [
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "value" },
                                            value: { kind: "any" },
                                        },
                                        {
                                            kind: "property",
                                            optional: false,
                                            key: { kind: "id", name: "label" },
                                            value: { kind: "any" },
                                        },
                                    ],
                                },
                                parameters: [
                                    {
                                        kind: "param",
                                        value: { kind: "id", name: "result" },
                                        type: null,
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "validation" },
                        value: {
                            kind: "object",
                            members: [
                                {
                                    kind: "property",
                                    optional: false,
                                    key: { kind: "id", name: "type" },
                                    value: { kind: "any" },
                                },
                                {
                                    kind: "property",
                                    optional: false,
                                    key: { kind: "id", name: "default" },
                                    value: { kind: "string" },
                                },
                            ],
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "onChange" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "function",
                                returnType: { kind: "void" },
                                parameters: [
                                    {
                                        kind: "param",
                                        value: { kind: "id", name: "field" },
                                        type: null,
                                    },
                                    {
                                        kind: "param",
                                        value: { kind: "id", name: "value" },
                                        type: null,
                                    },
                                ],
                            },
                        },
                    },
                ],
                referenceIdName: "VariableSelectorProps",
            },
            name: { kind: "id", name: "VariableSelector", type: null },
        },
    },
    BadgeTemplate: { kind: "program" },
    BusinessCardTemplate: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "id" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "showFront" },
                        value: { kind: "boolean" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "width" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "height" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "amount" },
                        value: { kind: "number" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "front" },
                        value: { kind: "string" },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "back" },
                        value: { kind: "string" },
                    },
                ],
                referenceIdName: "BusinessCardTemplateProps",
            },
            name: { kind: "id", name: "BusinessCardTemplate", type: null },
        },
    },
    HeaderTemplate: { kind: "program" },
    PresentationTemplate: { kind: "program" },
    ScheduleTemplate: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "conferenceId" },
                        value: { kind: "string" },
                        trailingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: Likely this should be removed (contained in a query)",
                                raw: " TODO: Likely this should be removed (contained in a query)",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "id" },
                        value: { kind: "string" },
                        leadingComments: [
                            {
                                type: "commentLine",
                                value: "TODO: Likely this should be removed (contained in a query)",
                                raw: " TODO: Likely this should be removed (contained in a query)",
                            },
                        ],
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "day" },
                        value: {
                            kind: "generic",
                            value: { kind: "class", name: "Schedule['day']" },
                        },
                    },
                ],
                leadingComments: [
                    {
                        type: "commentLine",
                        value: "TODO: Add context (needed for introspection)",
                        raw: " TODO: Add context (needed for introspection)",
                    },
                ],
                referenceIdName: "ScheduleTemplateProps",
            },
            name: { kind: "id", name: "ScheduleTemplate", type: null },
        },
    },
    ThemeTemplate: {
        kind: "program",
        component: {
            kind: "generic",
            value: {
                kind: "object",
                members: [
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "theme" },
                        value: {
                            kind: "generic",
                            value: {
                                kind: "class",
                                name: { kind: "id", name: "Theme" },
                                leadingComments: [
                                    {
                                        type: "commentLine",
                                        value: "TODO: Add fonts here (name + path)",
                                        raw: " TODO: Add fonts here (name + path)",
                                    },
                                ],
                            },
                        },
                    },
                    {
                        kind: "property",
                        optional: false,
                        key: { kind: "id", name: "id" },
                        value: { kind: "string" },
                    },
                ],
                referenceIdName: "ThemeTemplateProps",
            },
            name: { kind: "id", name: "ThemeTemplate", type: null },
        },
    },
    TweetTemplate: { kind: "program" },
};
exports.default = componentTypes;
//# sourceMappingURL=component-types.js.map