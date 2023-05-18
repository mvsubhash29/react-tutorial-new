import { useMemo, useState } from "react"

export const UseMemoDemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0
  }, [countOne]);

  return (
    <>
      {isEven ? 'Even' : 'Odd'}
      <button onClick={() => setCountOne(countOne + 1)}>Increment one {countOne}</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>Increment Two {countTwo}</button>
    </>
  )
}
