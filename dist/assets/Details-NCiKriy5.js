import{j as s}from"./vendor-motion-Dl8lXUsH.js";import{a as r,L as f}from"./vendor-icons-BBHJ0ezg.js";import{b as g,s as n}from"./index-76QHltB_.js";import{I as p}from"./InquiryModal-C5B8ZUK8.js";import{L as _}from"./LayoutRenderer-Cd1hM_UA.js";import{e as x,u as v}from"./vendor-react-Ojr5pEEK.js";import"./vendor-supabase-CIvuJI4W.js";import"./vendor-date-BvD7TL1z.js";import"./useSellerInquiries-wR5RBeOa.js";import"./useSavedItems-DwowzrGF.js";const P=()=>{const{id:a}=x();v(),g();const[t,l]=r.useState(null),[c,u]=r.useState(!0),[h,y]=r.useState(0),[I,L]=r.useState(!1),[j,S]=r.useState("standard"),[d,i]=r.useState(!1);return r.useEffect(()=>{window.scrollTo(0,0),(async()=>{if(a)try{const{data:e,error:o}=await n.from("listings").select(`
            *,
            creator:profiles!listings_creator_id_fkey(
              id, 
              full_name, 
              avatar_url, 
              is_verified_seller, 
              seller_level, 
              rating_average, 
              rating_count, 
              total_sales
            ),
            category:categories(title)
          `).eq("id",a).single();if(o)throw o;const m={...e,image:e.image_url,techStack:e.tech_stack,creator:{id:e.creator.id,name:e.creator.full_name,avatar:e.creator.avatar_url,verified:e.creator.is_verified_seller,rating:e.creator.rating_average||0,ratingCount:e.creator.rating_count||0,totalSales:e.creator.total_sales||0,followersCount:0,projectsCompleted:e.creator.total_sales||0,projectsSubmitted:0,repeatBuyers:0}};l(m),n.from("listings").update({views_count:(e.views_count||0)+1}).eq("id",a).then(()=>{})}catch(e){console.error("Error fetching listing:",e)}finally{u(!1)}})()},[a]),c?s.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-50/50",children:s.jsx(f,{className:"animate-spin text-accent-primary",size:32})}):t?([t.image,...t.screenshot_urls||[]].filter(Boolean),s.jsxs("div",{className:"min-h-screen bg-[#F8F9FB] pt-24 pb-20",children:[s.jsx(p,{isOpen:d,onClose:()=>i(!1),listingId:t.id,listingTitle:t.title,sellerId:t.creator.id,sellerName:t.creator.name||"Creator",sellerVerified:t.creator.verified}),s.jsx("div",{className:"max-w-[1240px] mx-auto px-4 md:px-6",children:s.jsx(_,{listing:t,onContactClick:()=>i(!0)})})]})):null};export{P as default};
