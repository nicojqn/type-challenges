type HTMLAttributes = {
    img: {
        src: string
    },
    input: {
        type?: 'text' | 'mail' | 'button',
        name?: string
    },
    audio: {
        src: string,
        autoplay?: boolean
    }
}

type HTMLNode<Tag> = {
    tagName: Tag,
    id?: string,
    class?: string,
    Attributes?: Tag extends keyof HTMLAttributes ? HTMLAttributes[Tag] : never
}

type HTMLShapes = {
    [Key in keyof HTMLAttributes] : HTMLNode<Key>
}

type ObjToUnion<T> = T[keyof T]

type HTMLShape = ObjToUnion<HTMLShapes>

const img: HTMLShape = {
    tagName: "img",
    Attributes: {
        src: "nrj.png"
    }
}

const input: HTMLShape = {
    tagName: "input",
    Attributes: {
        type: "button",
        name: "Cliquez ici"
    }
}

const audio: HTMLShape = {
    tagName: "audio",
    Attributes: {
        autoplay: true,
        src: "nrj.aac"
    }
}