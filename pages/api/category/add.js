const results = await fetch('/api/products/add', { 
    method: 'POST', 
    body: JSON.stringify(product) 
}).then(r => r.json())
if ( results?.data?.id ) { 
    router.push('/'); 
  }