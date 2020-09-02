from django.shortcuts import render, redirect, get_object_or_404


def homepage(request):
    return render(request, "mysite/index.html")


def list_posts(request):
    post = Post.objects.all()
    return render(request, "mysite/list_posts.html", {"posts": posts})


def post_detail(request, post_pk):
    post = get_object_or_404(Post.objects.all(), pk=post_pk)
    return render(request, "mysite/post_detail.html", {"post": post})


def post_by_category(request, category):
    posts = Post.objects.filter(categories__name__contains=category).order_by(
        "-created_on"
    )
    return render(request, "mysite/posts_by_category.html", {"category": category, "posts": posts})
