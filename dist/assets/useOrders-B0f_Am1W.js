import{a as r}from"./vendor-icons-BBHJ0ezg.js";import{b as _,s as m}from"./index-76QHltB_.js";const g=s=>{const{user:l,isAuthenticated:o}=_(),[c,i]=r.useState(null),[f,t]=r.useState(!0),[d,u]=r.useState(null),a=r.useCallback(async()=>{if(!o||!l||!s){i(null),t(!1);return}t(!0),u(null);try{const{data:e,error:n}=await m.from("orders").select(`
          *,
          listing:listings(id, title, image_url, price, description, source_files_url),
          seller:profiles!orders_seller_id_fkey(id, full_name, avatar_url, email),
          buyer:profiles!orders_buyer_id_fkey(id, full_name, avatar_url, email),
          order_access(*)
        `).eq("id",s).single();if(n)throw n;i(e)}catch(e){console.error("[useOrder] Error:",e),u(e instanceof Error?e.message:"Failed to fetch order")}finally{t(!1)}},[s,l,o]);return r.useEffect(()=>{a()},[a]),{order:c,isLoading:f,error:d,refetch:a}};export{g as u};
