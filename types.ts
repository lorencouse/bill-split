export type ReceiptItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  assignedTo: string | null;
};

export type Person = {
  id: string;
  name: string;
  items: ReceiptItem[];
};
