export default async (request, context) => {
  const country = context.geo?.country?.code || 'XX'; // Default to 'XX' if unknown
  const region = context.geo?.subdivision?.code || 'XX'; // State/region code (e.g., 'NM')

  // Allow ONLY New Mexico (NM) traffic
 if (region !== 'NM') {
  return Response.redirect('/blocked.html', 302); // 302 = temporary redirect
}
    

  // Optional: Allow all U.S. traffic (alternative to NM-only)
  // if (country !== 'US') {
  //   return Response.redirect('https://your-site.com/blocked', 302);
  // }

  return await context.next();
};

export const config = { path: "/*" }; // Applies to all routes
