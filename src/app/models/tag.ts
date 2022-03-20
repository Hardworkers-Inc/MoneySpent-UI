import { TransferType } from "./transferType";

export class Tag {
  id?: number
  name: string | undefined
  type: TransferType | undefined
  userId?: number
}
