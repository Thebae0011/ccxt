// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     webGetCtrlFeesAndLimits (params?: {}): Promise<implicitReturnType>;
     webGetEnDocsFees (params?: {}): Promise<implicitReturnType>;
     publicGetCurrency (params?: {}): Promise<implicitReturnType>;
     publicGetCurrencyListExtended (params?: {}): Promise<implicitReturnType>;
     publicGetOrderBook (params?: {}): Promise<implicitReturnType>;
     publicGetPairSettings (params?: {}): Promise<implicitReturnType>;
     publicGetTicker (params?: {}): Promise<implicitReturnType>;
     publicGetTrades (params?: {}): Promise<implicitReturnType>;
     publicGetCandlesHistory (params?: {}): Promise<implicitReturnType>;
     publicGetRequiredAmount (params?: {}): Promise<implicitReturnType>;
     publicGetPaymentsProvidersCryptoList (params?: {}): Promise<implicitReturnType>;
     privatePostUserInfo (params?: {}): Promise<implicitReturnType>;
     privatePostOrderCreate (params?: {}): Promise<implicitReturnType>;
     privatePostOrderCancel (params?: {}): Promise<implicitReturnType>;
     privatePostStopMarketOrderCreate (params?: {}): Promise<implicitReturnType>;
     privatePostStopMarketOrderCancel (params?: {}): Promise<implicitReturnType>;
     privatePostUserOpenOrders (params?: {}): Promise<implicitReturnType>;
     privatePostUserTrades (params?: {}): Promise<implicitReturnType>;
     privatePostUserCancelledOrders (params?: {}): Promise<implicitReturnType>;
     privatePostOrderTrades (params?: {}): Promise<implicitReturnType>;
     privatePostDepositAddress (params?: {}): Promise<implicitReturnType>;
     privatePostWithdrawCrypt (params?: {}): Promise<implicitReturnType>;
     privatePostWithdrawGetTxid (params?: {}): Promise<implicitReturnType>;
     privatePostExcodeCreate (params?: {}): Promise<implicitReturnType>;
     privatePostExcodeLoad (params?: {}): Promise<implicitReturnType>;
     privatePostCodeCheck (params?: {}): Promise<implicitReturnType>;
     privatePostWalletHistory (params?: {}): Promise<implicitReturnType>;
     privatePostWalletOperations (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderCreate (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderUpdate (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderCancel (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserPositionClose (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserPositionMarginAdd (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserPositionMarginRemove (params?: {}): Promise<implicitReturnType>;
     privatePostMarginCurrencyList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginPairList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginSettings (params?: {}): Promise<implicitReturnType>;
     privatePostMarginFundingList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserInfo (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderHistory (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderTrades (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserOrderMaxQuantity (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserPositionList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserPositionMarginRemoveInfo (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserPositionMarginAddInfo (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserWalletList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserWalletHistory (params?: {}): Promise<implicitReturnType>;
     privatePostMarginUserTradeList (params?: {}): Promise<implicitReturnType>;
     privatePostMarginTrades (params?: {}): Promise<implicitReturnType>;
     privatePostMarginLiquidationFeed (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange