%module xxx

template<typename T> T template_friend1(T);
template<typename T> T template_friend1(T);
struct MyTemplate1 {
  template<typename T> constexpr friend T template_friend1(T);
};

template<typename T> T template_friend2(T);
struct MyTemplate2 {
  template<typename T> constexpr friend T template_friend2(T);
};
template<typename T> T template_friend2(T);


int normal_friend1(int);
int normal_friend1(int);
struct MyClass1 {
  constexpr friend int normal_friend1(int);
};

int normal_friend2(int);
struct MyClass2 {
  constexpr friend int normal_friend2(int);
};
int normal_friend2(int);
