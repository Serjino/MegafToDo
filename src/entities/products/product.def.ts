import { ICardProps } from "../../shared/ui/card/model/Card.def"

export interface IProduct {
    id: number
    title: string
    subTitle: string
    price: number
    sale: number
    previewPath: string
    fullImgPath: string
}

export interface IProductCardProps extends IProduct {
    onClick: ICardProps['onClick']
}