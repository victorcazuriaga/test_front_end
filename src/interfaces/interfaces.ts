export interface FormsDashboard {
  amount: number;
  installments: number;
  mdr: number;
  days:Array<number>
  Otherdays:boolean;
}
export interface Props {
  size?: string;
  flex?: number;
  primary?:any;
  fontSize?:string;
  fontWeight?:number;
  marginBottom?:string;
}
