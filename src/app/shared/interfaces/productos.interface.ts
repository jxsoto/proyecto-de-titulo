export interface productos{

    id:number;
    name:string;
    type:string;
    desc:string;
    atk:number;
    def:number;
    level:number;
    race:string;
    attribute:string;
    card_images:[{
        id:number;
        image_url:string;
        image_url_small:string;
    }];
    card_sets: [{
        set_code:string;
        set_name:string;
        set_price:string;
        set_rarity:string;
        set_rarity_code:string;
    }],
    card_prices: []
}