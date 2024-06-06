import { useExtensionApi, render, TextField } from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const { checkout } = useExtensionApi();
  const shippingAddress2Field = checkout.shippingAddress2;

  const handleInputChange = (value) => {
    if (value.length > 40) {
      shippingAddress2Field.update(value.substring(0, 40));
    } else {
      shippingAddress2Field.update(value);
    }
  };

  return (
    <TextField
      label="Address 2"
      value={shippingAddress2Field.value}
      onChange={handleInputChange}
      maxLength={40}
    />
  );
}