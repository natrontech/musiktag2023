import Api from "../config/Api";
import { Record } from 'pocketbase';

export const parseImageUrl = (record: Record) => {
    return Api.getUri() + "/api/files/" + record?.collectionId + "/" + record?.id + "/" + record?.image;
}

export const parseImageUrlSpecific = (record: Record | undefined, image: string) => {
    return Api.getUri() + "/api/files/" + record?.["@collectionId"] + "/" + record?.id + "/" + image;
}

export const formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\'')
}

export const dateParser = (date: Date) => {

    const d = new Date(date);
    if (d.toLocaleDateString() === "Invalid Date") {
        return "Kein MFK Datum";
    }
    return d.toLocaleDateString();
}
