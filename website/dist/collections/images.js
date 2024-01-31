"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = void 0;
exports.Images = {
    slug: "images",
    hooks: {
        beforeChange: [
            function (_a) {
                var _b;
                var req = _a.req, data = _a.data;
                return __assign(__assign({}, data), { product: (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.product });
            }
        ],
    },
    admin: {
        hidden: true,
    },
    access: {
        read: function () { return true; },
    },
    upload: {
        staticURL: '/images',
        staticDir: "images",
        imageSizes: [
            {
                name: "standard",
                width: 1024,
                height: 1024,
                position: 'centre',
            },
        ],
        mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
    },
    fields: [
        {
            name: 'product',
            type: 'relationship',
            relationTo: 'products',
            required: false,
            hasMany: false,
            hidden: true,
        }
    ]
};
