import CommentForm from "@/components/comment-box/CommentForm";
import { BlogPost } from "@/components/details/BlogPost";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log(slug);
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas risus semper iaculis. Donec id lorem a ex porta viverra eget nec massa. Duis elementum mi vitae pretium euismod. Ut facilisis lacinia est, vel lobortis arcu aliquet in. Etiam sed hendrerit arcu. Vestibulum sit amet urna lorem. Quisque sed tellus eget arcu blandit pretium sagittis eget leo. Vestibulum vulputate velit nec sem gravida, quis commodo augue auctor. Cras hendrerit augue purus. Sed imperdiet velit vel tellus laoreet placerat. Phasellus bibendum eros ipsum, a scelerisque est placerat nec.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.

Morbi nec imperdiet lectus. Duis ullamcorper nisl sapien, ac interdum enim euismod eget. Morbi vitae porttitor mauris. Nunc odio odio, malesuada semper bibendum eu, faucibus ac nulla. Vivamus mattis sagittis libero. Vivamus accumsan gravida ante ac ultricies. Nam porttitor urna arcu, id mattis lorem molestie vel. Duis nec sapien ante. Sed porttitor diam nulla, vel porttitor sapien interdum quis. Pellentesque mattis velit eget tristique efficitur. Curabitur feugiat, ex ut vehicula suscipit, neque lacus tincidunt sem, nec maximus metus quam vel mauris.

Donec dapibus fermentum consectetur. Nunc fringilla elit ornare, consequat massa sit amet, dapibus ante. Donec hendrerit nunc in massa rutrum convallis. Donec condimentum sem ac mi porttitor placerat. Donec ac tincidunt ante, vel iaculis sem. Aenean nec pharetra magna. Donec volutpat imperdiet erat eget ultricies.

Nam in nisl nisl. Sed enim mauris, scelerisque a condimentum nec, porttitor in massa. Duis tincidunt pretium dui in sagittis. Praesent elementum gravida erat, eu feugiat diam pharetra a. Pellentesque ultrices varius libero, eu semper risus lacinia et. Integer sed nunc eget ligula ultrices aliquam. Aliquam a sagittis tortor. Praesent nibh arcu, porttitor eu quam eget, accumsan gravida purus. Donec interdum mauris id turpis lobortis mollis.`;

  return (
    <main className="w-full bg-[#F5F5F5] m-auto p-10 shadow-gray-500 font-lexend">
      <div className="max-w-3xl m-auto">
        <BlogPost
          title="Understanding the Evolution of Digital Art Marketplaces"
          author="kalpeshb"
          date="February 24, 2025"
          imageUrl="https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post-18.jpg"
          content={content}
        />
        <CommentForm />
      </div>
    </main>
  );
}

export default page;
