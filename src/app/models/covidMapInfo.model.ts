export class CovidInfoModel {
    public lat:number;
    public lng:number;

    confirmed?: string;
    deaths?: string;
    recovered?: string;
    provincestate?: string;
    countryregion?: string;

    constructor ( lat:number, lng:number){
        this.lat=lat;
        this.lng=lng;
    }

}