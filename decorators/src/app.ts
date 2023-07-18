

function Constraint({min, max}: {min: number, max: number}) {
    return function(target : User, key: keyof User) {
        let val = target[key];

        const getter = () => val;

        const setter = (v: unknown) => {
            if (typeof v !== 'number' || v > max || v < min) {
                throw new Error(`${v} does not satisfy the constraint for ${key as string}`);
            }
            val = v;
        }

        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        })
    }
}

 
class User {

    @Constraint({
        min: 0,
        max: 20
    })
    age: number = 0

    taille: number = 0

    name: string = ""
}

const u = new User()
u.age = 20;
console.log(u.age)
u.age = -20;