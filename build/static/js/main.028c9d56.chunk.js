(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"CartForm_form__1KU6S",control:"CartForm_control__CQNnv",actions:"CartForm_actions__13TFA",submit:"CartForm_submit__pV-P_",invalid:"CartForm_invalid__cZoNh"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2AUXz",total:"Cart_total__3yLnW",actions:"Cart_actions__3mKTC","button--alt":"Cart_button--alt__2NlYQ",button:"Cart_button__1rMEA"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2YMnX",summary:"CartItem_summary__227lb",price:"CartItem_price__2rmrF",amount:"CartItem_amount__3rmbM",actions:"CartItem_actions__36xWn"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1jWgU",icon:"HeaderCartButton_icon__2oav4",badge:"HeaderCartButton_badge__2fF35",bump:"HeaderCartButton_bump__3_btD"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__3ZAi-",description:"MealItem_description__SBv1c",price:"MealItem_price__5scHe"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__rxz0C","meals-appear":"AvailableMeals_meals-appear__3hHFf",MealsLoading:"AvailableMeals_MealsLoading__2IH2Z",MealsError:"AvailableMeals_MealsError__GsltB"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3ol5v",modal:"Modal_modal__X49aW","slide-down":"Modal_slide-down__1bDEL"}},,function(e,t,n){e.exports={header:"Header_header__eIuEJ","main-image":"Header_main-image__Xt8Si"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1PkOW"}},function(e,t,n){e.exports={card:"Card_card__3y6ty"}},function(e,t,n){e.exports={input:"Input_input__pJaZF"}},function(e,t,n){e.exports={form:"MealItemForm_form__20MK7"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.19392dd5.jpg",O=n(17),x=n.n(O),f=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"REACT<>CHEFS"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(19),p=n.n(h),_=function(){return Object(o.jsxs)("section",{className:p.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(12),C=n(6),y=n.n(C),N=n(20),g=n.n(N),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},M=n(4),F=n(21),S=n.n(F),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:S.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(M.a)({ref:t},e.input))]})})),k=n(22),w=n.n(k),E=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=n(13),R=n.n(H),P=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:R.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:R.a.description,children:e.description}),Object(o.jsx)("div",{className:R.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(E,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(14),T=n.n(D),B=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),l=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(v.a)(y.a.mark((function e(){var t,n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-meals-f20c2-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something Went Wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:T.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:T.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:T.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},L=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(B,{})]})},W=n(15),z=n.n(W),J=function(e){return Object(o.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},Y=function(e){return Object(o.jsx)("div",{className:z.a.modal,children:Object(o.jsx)("div",{className:z.a.content,children:e.children})})},V=document.getElementById("overlays"),X=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(J,{onClose:e.onClose}),V),c.a.createPortal(Object(o.jsx)(Y,{children:e.children}),V)]})},Z=n(7),K=n.n(Z),U=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:K.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:K.a.summary,children:[Object(o.jsx)("span",{className:K.a.price,children:t}),Object(o.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(5),Q=n.n($),q=n(3),G=n.n(q),ee=function(e){return""===e.trim()},te=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(G.a.control," ").concat(a.name?"":G.a.invalid),m="".concat(G.a.control," ").concat(a.street?"":G.a.invalid),b="".concat(G.a.control," ").concat(a.postalCode?"":G.a.invalid),O="".concat(G.a.control," ").concat(a.city?"":G.a.invalid);return Object(o.jsxs)("form",{className:G.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=l.current.value,r=u.current.value,i=d.current.value,o=!ee(n),j=!ee(a),m=!ee(i),b=5===r.trim().length;c({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:a,city:i,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!a.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!a.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:G.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),x=O[0],f=O[1],h=Object(i.useContext)(u),p="$".concat(h.totalAmount.toFixed(2)),_=h.items.length>0,C=function(e){h.removeItem(e)},N=function(e){h.addItem(Object(M.a)(Object(M.a)({},e),{},{amount:1}))},g=function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-meals-f20c2-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:h.items})});case 3:m(!1),f(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:Q.a["cart-items"],children:h.items.map((function(e){return Object(o.jsx)(U,{name:e.name,amount:e.amount,price:e.price,onRemove:C.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),F=Object(o.jsxs)("div",{className:Q.a.actions,children:[Object(o.jsx)("button",{className:Q.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:Q.a.button,onClick:function(){c(!0)},children:"Order"})]}),S=Object(o.jsxs)(s.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:Q.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),a&&Object(o.jsx)(te,{onConfirm:g,onCancel:e.onClose}),!a&&F]}),I=Object(o.jsx)("p",{children:"Sending order data..."}),k=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:Q.a.actions,children:Object(o.jsx)("button",{className:Q.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(X,{onClose:e.onClose,children:[!j&&!x&&S,j&&I,!j&&x&&k]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(M.a)(Object(M.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(M.a)(Object(M.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ce},ie=function(e){var t=Object(i.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(f,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})};c.a.render(Object(o.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.028c9d56.chunk.js.map