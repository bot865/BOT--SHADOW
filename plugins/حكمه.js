/*By ELAKRAB*/
//احلي مسا عليك 🐈
const handler = async (m, {conn, text}) => {
  m.reply(`╆❂━━━━━━❨🌿❩━━━━━━❂╆\n*〄⊱حـكـمة⊰☀️⊱الـيـوم⊰〄*\n\n➢ *"${pickRandom(global.hekma)}"*\n╆❂━━━━━━❨🌿❩━━━━━━❂╆`);
};
handler.tags = ['frasss'];
handler.command = ['حكمه','حكمة'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.hekma = ['اقبل كل التغيرات في حياتك ولا تقبل ان يتغير عليك احد.', 'لا مزيد من التعلم. المعرفة هي أداة قوية', 'أن العناية بصحتك الجسدية والعقلية هي أساسيات لحياة كاملة.', '"استمتع بالأشياء الصغيرة، يمكنها ان صبح كليره في يوم من الايام.', 'احصل على التسامح، حتى تتمكن من الحصول على نفس الشيء، لتحرير قلب.', 'ن قيمة الوقت الذي تقضيه مع شغفك هو الهدية الأكثر قيمة التي يمكنك الحصول عليها واستلامها.', 'كن ودودًا ورحيمًا مع الناس، فكل عمل مرتبط يمكنه أن يحدث فرقًا في حياتك.', 'اتخذ قرارًا بـ لا عندما تحتاج إلى ذلك، وحدد حدودًا جديرة بالثناء.', 'لا تقارن بأشياءك، كل شخص لديه طريقته الخاصة وروحه في الحياة.', 'استمع إلى زوجك بالتعاطف والفهم، فالتواصل هو أساس علاقة قوية.', 'تحاول التعبير عن مشاعرك، الصدق ضروري في الحب.', 'تعلم الأرز والتسوية، الحب يتطلب التضحية والبذل المتبادل', 'ان تخلي عنك الكل ف لا تيئس انت الأفضل', 'كل شخص لديه ميزه خارقه اجتهد لتعرف ميزتك', ' قم باخيار الخيارات الصعبه ف هي دائما الأفضل.', 'تذكر أن العلاقة مبنية على الثقة المتبادلة والاحترام', 'اختر شخصًا يكملك وسيكون إصدارًا أفضل لنفسك', 'الحب الحقيقي لن يصبح أقل، بل سيصبح أكثر.', 'عمار هو فعل، هو اختيار يوميات يتم زراعته بالأفعال والألفاظ.', 'إذا كنت استباقيًا وتؤدي إلى المبادرة في عملك، فهذا سيكون ذا قيمة من جانب تفوقك.', 'اتعرف بي أخطائك وإخفاقاتك، وستكون لديك فرص للنمو وتحسينها.', 'واجب عليك الصلي اليوميه لتستطيع تحقيق احلامك لان الله قادر علي كل شئ.', 'مية العلاقات الجيدة مع زملائك، فالعمل في الفريق ضروري لتحقيق النجاح','لا تجهد نفسك في البحث عن المساعدة أو البحث عن الإرشاد، دائمًا ما يكون هناك شيء جديد تتعلمه','تعرف على شعاراتك وقيمتها، واحتفل بنجاحاتك من خلال القليل منها','ابحث عن التوازن بين حياتك المهنية والشخصية، مع الجوانب المهمة'];