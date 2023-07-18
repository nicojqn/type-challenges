import Alpine from 'alpinejs'

Alpine.data('myComponent', function (initial = 0) {
    return {
        compteur: initial,
        increment () {
            this.compteur += 1;
        },
        decrement () {
            this.compteur -= 1;
            if (this.compteur < 0) {
                (this.$el as HTMLSpanElement).style.display = "none";
            }
        }
    }
})
Alpine.start();
