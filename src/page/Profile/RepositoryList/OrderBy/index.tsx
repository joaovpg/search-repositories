import Combobox from "@/components/UI/Combobox";

const orderByOptions = [
  { value: "ultima-atualizacao", label: "Última atualização (mais recente)" },
  { value: "estrelas-decrescente", label: "Estrelas (maior para menor)" },
  { value: "estrelas-crescente", label: "Estrelas (menor para maior)" },
  { value: "nome", label: "Nome (A → Z)" },
];

interface OrderByProps {
  label: string;
  orderBy: string;
  onChangeOrderBy: (value: string) => void;
}

function OrderBy({ label, orderBy, onChangeOrderBy }: Readonly<OrderByProps>) {
  return (
    <Combobox onChange={onChangeOrderBy} value={orderBy}>
      <Combobox.Trigger>Ordenar por: {label}</Combobox.Trigger>
      <Combobox.List>
        {orderByOptions.map((option) => (
          <Combobox.Option key={option.value} value={option.value}>
            {option.label}
          </Combobox.Option>
        ))}
      </Combobox.List>
    </Combobox>
  );
}

export default OrderBy;
