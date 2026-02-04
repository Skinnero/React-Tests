import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';

const testCases = [
  { amount: '100', from: 'PLN', to: 'USD' },
  { amount: '20', from: 'USD', to: 'PLN' },
  { amount: '200', from: 'PLN', to: 'USD' },
  { amount: '345', from: 'USD', to: 'PLN' },
];

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });
  it.each(testCases)('should run action callback with proper data on form submit', ({amount, from, to}) => {
    const action = jest.fn();
    render(<CurrencyForm action={action}/>);
    const submitButton = screen.getByText('Convert');
    const amountField = screen.getByTestId('amount');
    const fromField = screen.getByTestId('from-select');
    const toField = screen.getByTestId('to-select');

    userEvent.type(amountField, amount);
    userEvent.selectOptions(fromField, from);
    userEvent.selectOptions(toField, to);

    userEvent.click(submitButton);

    expect(action).toHaveBeenCalledTimes(1);
    expect(action).toHaveBeenCalledWith({amount: parseInt(amount), from: from, to: to});

    cleanup(); // Not needed cuz jest automatically unmounts after using it() function // not sure
  });
});