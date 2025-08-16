<p>
        configure shadcn ui
</p>

<p>

        bun x --bun shadcn@latest init

</p>

<p>Move utils.ts to libs/utils and name it "utils-shadcn.ts"

</p>

<p>
configure shadcn components.json

<p>

        "aliases": {
                "components": "@/components",
                "utils": "@/libs/utils/utils-shadcn",
                "ui": "@/components/ui/shadcn",
                "lib": "@/libs",
                "hooks": "@/libs/hooks"
        },

<p>

        bun x --bun shadcn@latest add

</p>
