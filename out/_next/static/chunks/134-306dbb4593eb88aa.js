"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{32201:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(57437),l=r(53159),s=r(58910);function n(){return(0,a.jsxs)("div",{className:"items-center mb-1 p-4",children:[(0,a.jsx)("div",{className:"sm:w-[90%] w-full h-[0.5px] bg-gray-400 mt-6"}),(0,a.jsxs)("footer",{className:"flex justify-between items-center p-1",children:[(0,a.jsx)("div",{className:"text-left mt-2",children:(0,a.jsxs)("p",{className:"text-gray-200 font-semibold text-sm text-center",children:["@silicomgf ",(0,a.jsx)(l.AGi,{className:"inline-block ml-2"})]})}),(0,a.jsx)("div",{className:"text-center ml-24 mt-2",children:(0,a.jsx)("p",{className:"text-gray-200 font-semibold text-sm text-center",children:"All rights not reserved \xaf\\_(ツ)_/\xaf (\xa9)"})}),(0,a.jsx)("div",{className:"text-right mt-2",children:(0,a.jsxs)("p",{className:"text-gray-200 font-semibold text-sm text-center",children:["andriy.v.shvets@gmail.com ",(0,a.jsx)(s.ixJ,{className:"inline-block ml-1"})]})})]})]})}},48586:function(e,t,r){let a,l,s;r.r(t),r.d(t,{default:function(){return h}});var n=r(57437),o=r(61396),i=r.n(o),c=r(2265),d=r(13087),u=r(83007),f=r(51231),x=r(51056);function p(e){let{onClose:t,title:r,children:o}=e,i=(0,c.useRef)(),[d,p]=(0,c.useState)(!1),[m,h]=(0,c.useState)(!1),b=(0,x.mA)(),{addNft:g}=(0,c.useContext)(f.NftContext);async function w(){if("connected"!==b.status){document.getElementById("text-error").textContent="You don't have wallet connected!";return}h(!0);try{let e=document.getElementById("nftAddress").value,t=document.getElementById("tokenId").value,r=s.utils.toWei(document.getElementById("price").value,"ether");console.log(a),await l.methods.listItem(e,t,r).send({from:a[0]}),p(!0)}catch(t){let e;t.toString().startsWith("Web3ValidatorError")?e="Put values correct!":(console.error(t),e="Something went wrong!"),document.getElementById("text-error").textContent=e;return}finally{h(!1)}let e=async t=>{console.log(t);let r=new s.eth.Contract(u.n1,t.returnValues.nftAddress),a="https://gateway.pinata.cloud/ipfs/"+(await r.methods.TOKEN_URI().call()).replace("ipfs://",""),n=await (await fetch(a)).json();t.returnValues.image=n.image,t.returnValues.name=n.name,t.returnValues.description=n.description,g(t),l.events.ItemListed({fromBlock:"latest"}).off("data",e)};await l.events.ItemListed({fromBlock:"latest"}).once("data",e)}return(0,c.useEffect)(()=>{let e=e=>{e.target==i.current&&t()};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,n.jsx)("div",{ref:i,className:"fixed mt-14 inset-0 z-20 overflow-y-auto h-full w-full",id:"my-modal",children:(0,n.jsxs)("div",{className:"relative top-32 mx-auto p-5 border-4 border-[#610819] w-96 shadow-lg rounded-2xl bg-gradient-to-r from-pink-500 via-pink-700 to-pink-800",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)("button",{onClick:e=>{e.preventDefault(),t()},className:"",children:"❌"})}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h1",{className:"text-2xl",children:r})})]}),(0,n.jsx)("div",{className:"px-2 pb-6 flex justify-center",children:o}),(0,n.jsx)("div",{className:"pb-2 text-center font-semibold text-[#52001d] text-sm",children:(0,n.jsx)("p",{id:"text-error"})}),d?(0,n.jsx)("p",{className:"text-center text-lg text-transparent font-bold bg-clip-text bg-gradient-to-r from-lime-500 via-green-500 to-lime-500",children:"You succesfully Listed your NFT"}):m?(0,n.jsx)("div",{role:"status",className:"flex justify-center mb-4",children:(0,n.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-800",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}):(0,n.jsx)("div",{className:"flex justify-center text-s",children:(0,n.jsx)("button",{id:"sell-button",className:"flex justify-center rounded-xl border border-transparent w-36 h-12 items-center bg-red-300 px-4 py-2 text-xl font-medium text-red-900 hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>w(),children:"Sell"})})]})})}!async function(){s=new d.ZPm(void 0!==window.ethereum?window.ethereum:"wss://eth-goerli.g.alchemy.com/v2/ZRVf6BagEk3VCqFlj7OKlq_jZUznQsGD"),a=await s.eth.getAccounts(),l=new s.eth.Contract(u.MS,u.IR)}();var m=r(80704);function h(){let[e,t]=(0,c.useState)(!1);return(0,n.jsxs)("div",{className:"bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-800 p-2 border-b-2 flex flex-row justify-between items-center",children:[(0,n.jsxs)("h1",{className:"py-4 px-4 text-3xl font-bold text-white",children:[(0,n.jsx)("span",{className:"font-semibold",children:"Closed"}),(0,n.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-purple-950 to-slate-950 font-bold",children:"Ocean"})]}),(0,n.jsxs)("div",{className:"flex flex-row items-center space-x-10 text-lg",children:[(0,n.jsxs)(i(),{href:"/",className:"group text-white hover:text-gray-300 transition duration-300",children:["Home",(0,n.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"})]}),(0,n.jsxs)(i(),{href:"/nft-marketplace",className:"group text-white hover:text-gray-300 transition duration-300",children:["Marketplace",(0,n.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"})]}),(0,n.jsxs)(i(),{href:"/your-nfts",className:"group text-white hover:text-gray-300 transition duration-300",children:["Your NFTs",(0,n.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"})]}),(0,n.jsx)("button",{className:"bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-2xl transition duration-300",onClick:()=>t(!0),children:"Sell NFT"}),(0,n.jsx)("w3m-button",{}),(0,n.jsxs)("div",{children:[e?(0,n.jsx)("div",{className:"fixed inset-0 z-10 bg-black bg-opacity-50"}):null,(0,n.jsx)(m.Z,{in:e,classNames:"alert",timeout:300,unmountOnExit:!0,children:(0,n.jsx)(p,{onClose:()=>t(!1),title:"Put Your NFT Data",children:(0,n.jsxs)("div",{className:"flex flex-col gap-3 w-72 mt-3",children:[(0,n.jsxs)("div",{className:"relative h-11 w-full min-w-[200px]",children:[(0,n.jsx)("input",{placeholder:"NFT Address",className:"peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100",id:"nftAddress"}),(0,n.jsx)("label",{className:"after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-800 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-800 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800",children:"NFT Address"})]}),(0,n.jsxs)("div",{className:"relative h-11 w-full min-w-[200px]",children:[(0,n.jsx)("input",{placeholder:"Token ID",className:"peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100",id:"tokenId"}),(0,n.jsx)("label",{className:"after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-800 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-800 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800",children:"Token ID"})]}),(0,n.jsxs)("div",{className:"relative h-11 w-full min-w-[200px]",children:[(0,n.jsx)("input",{placeholder:"Price (ETH)",className:"peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100",id:"price"}),(0,n.jsx)("label",{className:"after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-800 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-800 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800",children:"Price"})]})]})})})]})]})]})}},51231:function(e,t,r){r.r(t),r.d(t,{NftContext:function(){return o},default:function(){return i}});var a=r(57437),l=r(2265),s=r(13087),n=r(83007);let o=(0,l.createContext)();function i(e){let{children:t}=e,[r,i]=(0,l.useState)([]);async function c(){let e,t,r;t=new(e=new s.BvB("wss://eth-goerli.g.alchemy.com/v2/ZRVf6BagEk3VCqFlj7OKlq_jZUznQsGD")).eth.Contract(n.MS,n.IR);let a=await t.getPastEvents("ItemListed",{fromBlock:0,toBlock:"latest"}),l=await t.getPastEvents("ItemBought",{fromBlock:0,toBlock:"latest"}),o=await t.getPastEvents("ItemCanceled",{fromBlock:0,toBlock:"latest"});return l.forEach(e=>{a=a.filter(t=>!(t.returnValues.nftAddress==e.returnValues.nftAddress&&t.returnValues.tokenId==e.returnValues.tokenId&&t.returnValues.owner!==e.returnValues.newOwner&&t.returnValues.timestamp<e.returnValues.timestamp))}),o.forEach(e=>{a=a.filter(t=>!(t.returnValues.nftAddress==e.returnValues.nftAddress&&t.returnValues.tokenId==e.returnValues.tokenId&&t.returnValues.owner==e.returnValues.owner&&t.returnValues.timestamp<e.returnValues.timestamp))}),await Promise.all(a.map(async t=>{r=new e.eth.Contract(n.n1,t.returnValues.nftAddress);let a="https://gateway.pinata.cloud/ipfs/"+(await r.methods.TOKEN_URI().call()).replace("ipfs://",""),l=await (await fetch(a)).json();t.returnValues.image=l.image,t.returnValues.name=l.name,t.returnValues.description=l.description})),a}return(0,l.useEffect)(()=>{c().then(i).catch(console.error)},[]),(0,a.jsx)(o.Provider,{value:{nfts:r,addNft:e=>{i(t=>[...t,e])}},children:t})}}}]);