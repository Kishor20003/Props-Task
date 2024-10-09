import ParentComp from "./ParentComp";
import ProfileCard from "./ProfileCard";



function App() {
  return (<div>
   <ParentComp></ParentComp>
   <ProfileCard name="Sundar Pichai" img="https://th.bing.com/th/id/OSK.HERObURWeNzdo9aDPplozDf1RFbJS_LLWO-CxJxtFCL1gZw?rs=1&pid=ImgDetMain" bio="Cheif Executive Officer of Google"></ProfileCard>
   </div>
  );
}

export default App;
