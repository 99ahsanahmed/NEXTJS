
export default function dynamicPr( 
    {params} : {params:{prId: string }} 
) {
    return (
      <>
      <h1>This is Product { params.prId } </h1>
      </>
    );
  }
  