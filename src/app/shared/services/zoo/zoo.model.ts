export class Animal {
    constructor(
        public name: string,
        public latin_name: string,
        public animal_type: string,
        public active_time: string,
        public length_min: string,
        public length_max: string,
        public weight_min: string,
        public weight_max: string,
        public lifespan: string,
        public habitat: string,
        public diet: string,
        public geo_range: string,
        public image_link: string,
        public id: number
    ) {}
}
