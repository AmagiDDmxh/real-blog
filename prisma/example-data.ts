import { Prisma } from '.prisma/client'

const hackerQuote = {
  book: 'How to Become a Hacker',
  author: 'Eric Steven Raymond',
  // Better trimed and no tab between
  content: `If you aren't the kind of person that feels this way naturally, 
  you'll need to become one in order to make it as a hacker. 
  Otherwise you'll find your hacking energy is sapped by distractions like sex, money, and social approval.`,
}

const citadelleQuote = {
  author: `安东尼·圣艾修伯里(Antoine de Saint-Exupéry)`,
  book: `《城堡》(Citadelle)`,
  content: '如果你想造船，不要召集人们去伐木，也不要给他们分配任务，只需告诉他们大海的广阔无垠。',
}

const fictionQuote = {
  author: '杨·马特尔',
  book: '《标本师的魔幻剧本》(Beatrice and Virgil)',
  content: '好小说的任务就是让不安的人得到安慰，让安逸的人感到不安。',
  reference: '戴维·福斯特·华莱士与劳瑞·麦卡弗里的谈话 - 小说和写实难以区分',
}

export const quotes: Prisma.QuoteCreateInput[] = [
  hackerQuote,
  citadelleQuote,
  fictionQuote,
  {
    content: `The term ‘function’ got into mathematics, I was told by Prof. K. O. May, due to a misinterpretation of a proper usage by Leibniz. Nevertheless, it has become a fundamental concept of mathematics and whatever it is called, it deserves better treatment. There is perhaps no better example in mathematical education of missed opportunities than in the treatment of functions.`,
    author: 'Preston C. Hammer',
    book: 'Standards and Mathematical Terminology',
  },
  {
    content: `我不能创造的东西，我就没有理解。`,
    author: '理查德·费曼(Richard Feynman)',
    reference: '写在他去世时的黑板上',
  },
  {
    content: `数学的精髓全在于自由。`,
    author: '格奥尔格·康托尔(Georg Cantor)',
    book: '《论文集》(Gesammelte Abhandlungen)',
  },
  {
    content: '几行推理就能改变我们对世界的认识。',
    author: '史蒂文·兰兹伯格(Steven E. Landsburg)',
    book: '《扶手椅中的经济学家》(The Armchair Economist)'
  },
  {
    content: '微积分是迄今为止人类智慧发明的最有力的思维武器。',
    author: '威廉·本杰明·史密斯(W. B. Smith)',
    book: '《无穷小分析》(Infinitesimal Analysis)'
  },
  // ...More
]
