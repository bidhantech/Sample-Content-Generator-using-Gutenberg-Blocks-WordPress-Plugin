// Sample h1 heading - 30 length
wp.blocks.registerBlockType('sample-content-generator/h-one-30',{
    title: "Sample heading h1 - 30 length",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement("h1",null,"Sample h1 heading of 30 length");
    },
    save: (props)=> {
        return wp.element.createElement("h1",null,"Sample h1 heading of 30 length");
    },
})

// Sample h1 heading - 15 length
wp.blocks.registerBlockType('sample-content-generator/h-one-15',{
    title: "Sample heading h1 - 15 length",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
       return wp.element.createElement("h1",null,"heading1 sample");
    },
    save: (props)=> {
        return wp.element.createElement("h1",null,"heading1 sample");
    },
})

// Sample h2 heading - 30 length
wp.blocks.registerBlockType('sample-content-generator/h-two-30',{
    title: "Sample heading h2 - 30 length",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement("h2",null,"Sample h2 heading of 30 length");
    },
    save: (props)=> {
        return wp.element.createElement("h2",null,"Sample h2 heading of 30 length");
    },
})

// Sample h2 heading - 15 length
wp.blocks.registerBlockType('sample-content-generator/h-two-15',{
    title: "Sample heading h2 - 15 length",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
       return wp.element.createElement("h2",null,"heading2 sample");
    },
    save: (props)=> {
        return wp.element.createElement("h2",null,"heading2 sample");
    },
})

// Sample h3 heading - 30 length
wp.blocks.registerBlockType('sample-content-generator/h-three-30',{
    title: "Sample heading h3 - 30 length",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement("h3",null,"Sample h3 heading of 30 length");
    },
    save: (props)=> {
        return wp.element.createElement("h3",null,"Sample h3 heading of 30 length");
    },
})

// Sample h3 heading - 15 length
wp.blocks.registerBlockType('sample-content-generator/h-three-15',{
    title: "Sample heading h3 - 15 length",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
       return wp.element.createElement("h3",null,"heading3 sample");
    },
    save: (props)=> {
        return wp.element.createElement("h3",null,"heading3 sample");
    },
})

//Sample Paragraph - 25 words
wp.blocks.registerBlockType('sample-content-generator/sample-paragraph-25',{
    title: "Sample Paragraph - 25 words",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
    save: (props)=> {
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
})

//Sample Paragraph - 50 words
wp.blocks.registerBlockType('sample-content-generator/sample-paragraph-50',{
    title: "Sample Paragraph - 50 words",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
    save: (props)=> {
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
})

//Sample Paragraph - 100 words
wp.blocks.registerBlockType('sample-content-generator/sample-paragraph-100',{
    title: "Sample Paragraph - 100 words",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
    save: (props)=> {
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
})

//Sample Paragraph - 200 words
wp.blocks.registerBlockType('sample-content-generator/sample-paragraph-200',{
    title: "Sample Paragraph - 200 words",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
    save: (props)=> {
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
})

//Sample Paragraph - 500 words
wp.blocks.registerBlockType('sample-content-generator/sample-paragraph-500',{
    title: "Sample Paragraph - 500 words",
    icon: 'text',
    category: 'common',
    attributes: {},
    edit: (props)=>{
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
    save: (props)=> {
        return wp.element.createElement(
            "p",
            null,
            "Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content. Sample paragraph is a simple sample paragraph for wordpress designers & developers like you. It helps you to test your website with some sample content.");
     },
})
