
  Pod::Spec.new do |s|
    s.name = 'IdApplesigninplugin'
    s.version = '0.0.1'
    s.summary = 'Capacitor project to manage apple sign in'
    s.license = 'MIT'
    s.homepage = 'https://github.com/csurbier/id-applesigninplugin.git'
    s.author = 'csurbier'
    s.source = { :git => 'https://github.com/csurbier/id-applesigninplugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end