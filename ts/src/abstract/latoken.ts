// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     publicGetBookCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     publicGetChartWeek (params?: {}): Promise<implicitReturnType>;
     publicGetChartWeekCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     publicGetCurrency (params?: {}): Promise<implicitReturnType>;
     publicGetCurrencyAvailable (params?: {}): Promise<implicitReturnType>;
     publicGetCurrencyQuotes (params?: {}): Promise<implicitReturnType>;
     publicGetCurrencyCurrency (params?: {}): Promise<implicitReturnType>;
     publicGetPair (params?: {}): Promise<implicitReturnType>;
     publicGetPairAvailable (params?: {}): Promise<implicitReturnType>;
     publicGetTicker (params?: {}): Promise<implicitReturnType>;
     publicGetTickerBaseQuote (params?: {}): Promise<implicitReturnType>;
     publicGetTime (params?: {}): Promise<implicitReturnType>;
     publicGetTradeHistoryCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     publicGetTradeFeeCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     publicGetTradeFeeLevels (params?: {}): Promise<implicitReturnType>;
     publicGetTransactionBindings (params?: {}): Promise<implicitReturnType>;
     privateGetAuthAccount (params?: {}): Promise<implicitReturnType>;
     privateGetAuthAccountCurrencyCurrencyType (params?: {}): Promise<implicitReturnType>;
     privateGetAuthOrder (params?: {}): Promise<implicitReturnType>;
     privateGetAuthOrderGetOrderId (params?: {}): Promise<implicitReturnType>;
     privateGetAuthOrderPairCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     privateGetAuthOrderPairCurrencyQuoteActive (params?: {}): Promise<implicitReturnType>;
     privateGetAuthStopOrder (params?: {}): Promise<implicitReturnType>;
     privateGetAuthStopOrderGetOrderId (params?: {}): Promise<implicitReturnType>;
     privateGetAuthStopOrderPairCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     privateGetAuthStopOrderPairCurrencyQuoteActive (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTrade (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTradePairCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTradeFeeCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTransaction (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTransactionBindings (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTransactionBindingsCurrency (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTransactionId (params?: {}): Promise<implicitReturnType>;
     privateGetAuthTransfer (params?: {}): Promise<implicitReturnType>;
     privatePostAuthOrderCancel (params?: {}): Promise<implicitReturnType>;
     privatePostAuthOrderCancelAll (params?: {}): Promise<implicitReturnType>;
     privatePostAuthOrderCancelAllCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     privatePostAuthOrderPlace (params?: {}): Promise<implicitReturnType>;
     privatePostAuthSpotDeposit (params?: {}): Promise<implicitReturnType>;
     privatePostAuthSpotWithdraw (params?: {}): Promise<implicitReturnType>;
     privatePostAuthStopOrderCancel (params?: {}): Promise<implicitReturnType>;
     privatePostAuthStopOrderCancelAll (params?: {}): Promise<implicitReturnType>;
     privatePostAuthStopOrderCancelAllCurrencyQuote (params?: {}): Promise<implicitReturnType>;
     privatePostAuthStopOrderPlace (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransactionDepositAddress (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransactionWithdraw (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransactionWithdrawCancel (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransactionWithdrawConfirm (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransactionWithdrawResendCode (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransferEmail (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransferId (params?: {}): Promise<implicitReturnType>;
     privatePostAuthTransferPhone (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange