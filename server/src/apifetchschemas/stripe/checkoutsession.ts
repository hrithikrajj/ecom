import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class checkoutsession {
  @Field()
  id: string;
  // "amount_subtotal": null,
  // "amount_total": null,
  // "automatic_tax": {
  //   "enabled": false,
  //   "status": null
  // },
  // "billing_address_collection": null,
  // "cancel_url": "https://example.com/cancel",
  // "client_reference_id": null,
  // "currency": null,
  // "customer": null,
  // "customer_details": null,
  // "customer_email": null,
  // "livemode": false,
  // "locale": null,
  // "metadata": {},
  // "mode": "payment",
  // "payment_intent": "pi_1DpRW52eZvKYlo2CE0X2TEE1",
  // "payment_method_options": {},
  // "payment_method_types": [
  //   "card"
  // ],
  // "payment_status": "unpaid",
  // "setup_intent": null,
  // "shipping": null,
  // "shipping_address_collection": null,
  // "submit_type": null,
  // "subscription": null,

  @Field()
  success_url: string;
  @Field()
  url: string;
}
