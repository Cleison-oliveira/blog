import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    const url = new URL(context.request.url);

    if (url.pathname.startsWith("/blog/blog/")) {
        const newPath = url.pathname.replace("/blog/blog/", "/blog/article/");
        return context.redirect(newPath, 301);
    }

    return next();
});
