import { nextJsConfig } from "@workspace/eslint-config/next-js";
import clerkNext from "@clerk/eslint-plugin/next";

/** @type {import("eslint").Linter.Config[]} */
export default [
    ...nextJsConfig,
    {
        plugins: {
            "@clerk/next": clerkNext,
        },
        rules: {
            "@clerk/next/require-auth-protection": [
                "error",
                {
                    protected: [
                        "src/app/dashboard/**",
                        "src/actions/dashboard/**",
                    ],
                    public: [
                        "src/app/sign-in/**",
                        "src/app/sign-up/**",
                    ],
                    resources: {
                        routeHandlers: true,
                        serverFunctions: true,
                    },
                },
            ],
        },
    },
];
