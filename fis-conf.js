fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false  //是否添加hash值 阻止缓存
});


//js压缩
fis.match('*.js',{
	 // fis-optimizer-uglify-js 插件进行压缩
	optimizer: fis.plugin('uglify-js'),
	packTo:'pkg/package.js',
	release: './js/$0'
});


//png
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// // 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});


fis.match('*.{css,scss}',{
  postprocessor : fis.plugin("autoprefixer",{
      // https://github.com/ai/browserslist#queries
      "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
      "flexboxfixer": true,
      "gradientfixer": true
  })
})





fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css',{
		'keepBreaks':true   //保持一个规则一个换行
	}),
	packTo:'package.css',
	release: './css/$0'
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

//将css打包成一个文件
fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    //allInOne: true
  })
});



//将scss打包成css
fis.match('*.{scss,css}', {
  rExt: '.css',
  packTo: '/static/aio.css',
  parser: fis.plugin('node-sass', {
    // options...
  }),
	optimizer:fis.plugin('clean-css',{
		'keepBreaks':true //保持换行
	})
})

//生成相对路径
fis.hook('relative');
fis.match('*',{
  relative:true
})