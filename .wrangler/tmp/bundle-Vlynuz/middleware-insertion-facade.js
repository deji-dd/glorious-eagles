				import worker, * as OTHER_EXPORTS from "/Users/mac/Desktop/glorious-eagles/.wrangler/tmp/pages-3qH0N6/functionsWorker-0.212100218886351.mjs";
				import * as __MIDDLEWARE_0__ from "/Users/mac/Desktop/glorious-eagles/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/Users/mac/Desktop/glorious-eagles/.wrangler/tmp/pages-3qH0N6/functionsWorker-0.212100218886351.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;