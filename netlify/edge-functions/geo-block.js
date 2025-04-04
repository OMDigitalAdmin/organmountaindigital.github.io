export default async (request, context) => {
  const country = context.geo?.country?.code || 'XX'; // Default to 'XX' if unknown
  const region = context.geo?.subdivision?.code || 'XX'; // State/region code (e.g., 'NM')

  // Allow ONLY New Mexico (NM) traffic
  if (region !== 'NM') {
    return new Response(
      `Access restricted: This site is only available in New Mexico.`,
      { 
        status: 403,
        headers: { "Content-Type": "text/html" }
      }
    );
  }

  // Optional: Allow all U.S. traffic (alternative to NM-only)
  // if (country !== 'US') {
  //   return Response.redirect('https://your-site.com/blocked', 302);
  // }

  return await context.next();
};

export const config = { path: "/*" }; // Applies to all routes
