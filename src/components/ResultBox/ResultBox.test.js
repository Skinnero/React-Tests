import ResultBox from "./ResultBox";
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

const PLNToUSDTestCases = [
  {input: 100, output: 28.57},
  {input: 200, output: 57.14},
  {input: 15, output: 4.29},
  {input: 1, output: 0.29},
]

const USDToPLNTestCases = [
  {input: 100, output: 350.00},
  {input: 200, output: 700.00},
  {input: 15, output: 52.50},
  {input: 1, output: 3.50},
]

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={100} from={'PLN'} to={'USD'}/>)
  });
  it.each(PLNToUSDTestCases)('should render proper info about conversion when PLN -> USD', ({input, output}) => {
    render(<ResultBox amount={input} from={'PLN'} to={'USD'}/>)
    const resultField = screen.getByTestId("result-div")

    expect(resultField).toHaveTextContent(`PLN ${input}.00 = $${output}`)
    cleanup();
  });
  it.each(USDToPLNTestCases)('should render proper info about conversion when USD -> PLN', ({input, output}) => {
    render(<ResultBox amount={input} from={'USD'} to={'PLN'}/>)
    const resultField = screen.getByTestId("result-div")

    expect(resultField).toHaveTextContent(`$${input}.00 = PLN ${output}`)
    cleanup();
  });
  it('should render proper same values when converted into same currency for PLN', () => {
    render(<ResultBox amount={100} from={"PLN"} to={"PLN"}/>)
    const resultField = screen.getByTestId("result-div")

    expect(resultField).toHaveTextContent("PLN 100.00 = PLN 100.00")
  });
  it('should render proper same values when converted into same currency for USD', () => {
    render(<ResultBox amount={100} from={"USD"} to={"USD"}/>)
    const resultField = screen.getByTestId("result-div")

    expect(resultField).toHaveTextContent("$100.00 = $100.00")
  });
  it('should render "Wrong value..." when provided with negative number', () => {
    render(<ResultBox amount={-100} from={"PLN"} to={"USD"}/>)
    const resultField = screen.getByTestId("result-div")

    expect(resultField).toHaveTextContent("Wrong value...")
  });
})