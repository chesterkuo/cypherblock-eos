import {AntiSpams} from './ConstTypes';

export const IsSpam = (action_trace) => {
  let spam = false;

  //   if (action_trace.act) {
  //     //chech blacklist
  //     AntiSpams.black_list.map((black_item) => {
  //       if (black_item.act_account == action_trace.act.account && black_item.act_name == action_trace.act.name) {
  //         spam = true;
  //         return spam;
  //       }
  //     });

  //     //check small balance EOS
  //     if (
  //       action_trace.act.name == 'transfer' &&
  //       action_trace.act.account == 'eosio.token' &&
  //       action_trace.act.data.quantity
  //     ) {
  //       if (Number(action_trace.act.data.quantity.split(' ')[0]) <= AntiSpams.min_eos_ammount) {
  //         spam = true;
  //         return spam;
  //       }
  //     }
  //   }

  return spam;
};
