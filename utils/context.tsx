import { ReceiptItem } from '@/types';
import { SampleReceiptItems } from '@/utils/constants';
import React, { createContext, useContext, useState } from 'react';

type Person = { id: string; name: string; items: any[] };

type BillSplitContextType = {
  people: Person[];
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
  receiptItems: ReceiptItem[];
  setReceiptItems: React.Dispatch<React.SetStateAction<ReceiptItem[]>>;
};

const BillSplitContext = createContext<BillSplitContextType | undefined>(
  undefined,
);

export const BillSplitProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [receiptItems, setReceiptItems] =
    useState<ReceiptItem[]>(SampleReceiptItems);
  const [people, setPeople] = useState<Person[]>([
    { id: '1', name: 'Alice', items: [] },
    { id: '2', name: 'Bob', items: [] },
    { id: '3', name: 'Charlie', items: [] },
    { id: '4', name: 'David', items: [] },
    { id: '5', name: 'Eve', items: [] },
  ]);

  return (
    <BillSplitContext.Provider
      value={{
        people,
        setPeople,
        selectedItem,
        setSelectedItem,
        receiptItems,
        setReceiptItems,
      }}
    >
      {children}
    </BillSplitContext.Provider>
  );
};

export function useBillSplitContext() {
  const context = useContext(BillSplitContext);
  if (!context)
    throw new Error('useBillSplit must be used within BillSplitProvider');
  return context;
}
