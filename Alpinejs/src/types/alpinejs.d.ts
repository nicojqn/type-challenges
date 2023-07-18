declare module "alpinejs" {

    type AlpineInstance = {
        readonly $el: HTMLElement,
    }

    type Opts<T> = {
        [Key in keyof T]: T[Key] extends (...args: infer Args) => infer Ret ? (this: AlpineInstance & T, ...args: Args) => Ret : T[Key]
    }

    const Alpine: {
        data<T>(name: string, options: (...args: any) => Opts<T>) : void
        start() : void
    }

    export {Alpine}
    export default Alpine
}