import type { BuyWithCryptoQuote } from "../../../../../../../pay/buyWithCrypto/actions/getQuote.js";
import { formatNumber } from "../../../../../../../utils/formatNumber.js";
import { Container } from "../../../../components/basic.js";
import { Text } from "../../../../components/text.js";

/**
 * @internal
 */
export function SwapFees(props: {
  quote: BuyWithCryptoQuote;
  align: "left" | "right";
}) {
  return (
    <Container
      flex="column"
      gap="xs"
      style={{
        alignItems: props.align === "right" ? "flex-end" : "flex-start",
      }}
    >
      {props.quote.processingFees.map((fee, i) => {
        const feeAmount = formatNumber(Number(fee.amount), 4);
        return (
          <>
            {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
            <Container key={i} flex="row" gap="xxs">
              <Text color="primaryText" size="sm">
                {feeAmount === 0 ? "~" : ""}
                {feeAmount} {fee.token.symbol}
              </Text>
              <Text color="secondaryText" size="sm">
                (${fee.amountUSDCents / 100})
              </Text>
            </Container>
          </>
        );
      })}
    </Container>
  );
}
